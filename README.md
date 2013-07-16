photo-gallery
=============

photo-gallery is a personal  album, implemented with nodeJS, requireJS and angularJS, Currently, it only contains simple functionalities, including:

1. album&photo batch importing.

2. view all photos or by albums.

3. view photo one by one both in or out of a album.

Environment requirements:
-------------------------
NodeJS

Mongodb

Demo:
-------------------------
<a href="https://photogallery-pliman.rhcloud.com">https://photogallery-pliman.rhcloud.com</a>

Installation:
-------------------------

	1. clone / download photo-gallery
	2. import test data from data/albums.dat data/photos.dat into mongodb
	3. modify conf.js for log and mongodb configuration
	4. run app.js, enjoy your personal album

###1. Album&photo batch importing:
-------------------------
Folder `uploads` is the place which albums and photos should be placed.

Add albums and photos:

	1. Create an folder just under 'unloads'(doesn't support subfolder under album), if
	you want add new photos into existing albums, just skip to step 2.
	2. Place new photo into this album.
	3. config IMPORT_DIR in photoImporter.js, and use node to execute photoImporter.js.

###2. View all photos or by albums:
-----------------------------------

	Visit http://localhost:3000

###3. View photo one by one both in or out of a album:
-----------------------------------

	Click a photo, will navigate a photo in all photo stream.
	Click an album first, then click a photo, will navigate a photo in album.

Have fun with you personal album.