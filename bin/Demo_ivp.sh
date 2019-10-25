#!/bin/sh 
export LD_LIBRARY_PATH=`pwd`:$LD_LIBRARY_PATH
./mtrec -f mtrec_scp/mtrec_ivp.cfg -t $1 -c $2
