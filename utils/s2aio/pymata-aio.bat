@echo off
break ON
rem fichiers BAT et fork créés par Sébastien CANET
cls
SET currentpath=%~dp1
cd %currentpath%
python .\Lib\site-packages\pymata_aio\pymata_iot.py -l 5 -comport COM6