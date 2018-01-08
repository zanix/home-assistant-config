#!/bin/bash

mysql -h 192.168.1.11 -N -B -p'CjPvKzauvY9NKadsgHCL' -u info -e 'SELECT Sum(Round(( ( data_length + index_length ) / 1024 / 1024 / 1024 ), 2)) AS "Size in GB" FROM information_schema.tables WHERE table_schema = "homeassistant"'
