@echo off
break ON
rem fichiers BAT et fork créés par Sébastien CANET
cls
SET currentpath=%~dp1
cd %currentpath%
python .\Lib\site-packages\s2aio\__main__.py -l 5 -p COM6