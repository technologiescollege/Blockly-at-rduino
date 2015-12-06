@echo off
break ON
rem fichiers BAT et fork créés par Sébastien CANET
cls
SET currentpath=%~dp1
cd %currentpath%
SET /p portCOM=Numero du port COM ?
python .\Lib\site-packages\s2aio\__main__.py -l 5 -c no_client -p COM%portCOM%