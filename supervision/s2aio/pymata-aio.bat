@echo off
break ON
rem fichiers BAT et fork créés par Sébastien CANET
cls
SET currentpath=%~dp1
cd %currentpath%
SET /p portCOM=Numero du port COM ?
python .\Lib\site-packages\pymata_aio\pymata_iot.py -l 5 -c no_client -comport COM%portCOM%