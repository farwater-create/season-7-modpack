import os
import zipfile
version = input("enter release version: ")
zf = zipfile.ZipFile("farwater-create-season-7-" + version + ".zip", "w")
for dirname, subdirs, files in os.walk("overrides"):
    zf.write(dirname)
    for filename in files:
        zf.write(os.path.join(dirname, filename))
zf.write("manifest.json")
zf.close()
