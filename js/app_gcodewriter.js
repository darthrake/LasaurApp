



GcodeWriter = {
  
  // repetitive point deletion
  ////////////////////////////
  // Any point that is within this distance from the
  // last used point is ignored.
  // This also has the effect of merging geometry made from
  // short lines into one segment.
  // TODO: include angles into the deletion check
  DELETION_EPSILON_SQUARED : Math.pow(0.1, 2),

  write : function(boundarys, max_feedrate, laser_intensity_factor, scale, xoff, yoff) {
    var glist = [];
    var nsegment = 0;
    var x_prev = 0.0;
    var y_prev = 0.0;
    var laser_intensity_prev = 0;
    
    for (layer in boundarys) {
      var segments = boundarys[layer];
      for (var i=0; i<segments.length; i++) {
        var segment = segments[i];
        if (segment.length > 0) {
          var vertex = 0;
          var x = segment[vertex][0]*scale + xoff;
          var y = segment[vertex][1]*scale + yoff;

          if (Math.pow(x_prev-x,2) + Math.pow(y_prev-y,2) > this.DELETION_EPSILON_SQUARED) {

            glist.push("G00X"+x.toFixed(3)+"Y"+y.toFixed(3)+"\n");
            nsegment += 1;
            x_prev = x; y_prev = y;
          }
          for (vertex=1; vertex<segment.length; vertex++) {
            var x = segment[vertex][0]*scale + xoff
            var y = segment[vertex][1]*scale + yoff

            var laser_intensity = segment[vertex][2]*laser_intensity_factor;
            if (laser_intensity > 255) {
              laser_intensity = 255
            }
              else if (laser_intensity < 0) {
                laser_intensity = 0
            }
          
            if ((Math.pow(x_prev-x,2) + Math.pow(y_prev-y,2) > this.DELETION_EPSILON_SQUARED) 
                  || (vertex == segment.length-1))
            {
              if(laser_intensity_prev != laser_intensity) {
                glist.push("S"+laser_intensity+"\n");
                laser_intensity_prev = laser_intensity;
              }

              glist.push("G01X"+x.toFixed(3)+"Y"+y.toFixed(3)+"\n");
              x_prev = x; y_prev = y;
            }
          }
        }
      }
    }            
    //$().uxmessage('notice', "wrote " + nsegment + " G-code toolpath segments");
    return glist.join('');
  }
    
}

