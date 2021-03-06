
LasaurApp
=========

LasaurApp is the official app to control [Lasersaur](http://lasersaur.com) laser cutters. At the moment it has the following features:

- send G-code to the lasersaur
- convert SVG files to G-code
- GUI widget to move the laser head
- handy G-code programs for the optics calibration process

This app is written mostly in cross-platform, cross-browser Javascript. The idea is to use only a lightweight backend for relaying to and from the USB port. Eventually this backend can either move to the controller on the Lasersaur or to a small dedicated computer. 

This is done this way because we imagine laser cutters being shared in shops. We see people  controlling laser cutters from their laptops and not wanting to go through annoying setup processes. Besides this, html-based GUIs are just awesome :)

**DISCLAIMER:** Please be aware that operating a DIY laser cutter can be dangerous and requires full awareness of the risks involved. You build the machine and you will have to make sure it is safe. The instructions of the Lasersaur project and related software come without any warranty or guarantees whatsoever. All information is provided as-is and without claims to mechanical or electrical fitness, safety, or usefulness. You are fully responsible for doing your own evaluations and making sure your system does not burn, blind, or electrocute people.


How to Use this App
-------------------

* make sure you have Python 2.7
* install [pyserial](http://pyserial.sourceforge.net/)
* run *python app.py*
* open *http://localhost:4444* 
  (in current Firefox or Chrome, future Safari 6 or IE 10)

For more information see the [Lasersaur Software Setup Guide](http://labs.nortd.com/lasersaur/manual/software_setup).
