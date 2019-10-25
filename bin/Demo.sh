#!/bin/sh 
export LD_LIBRARY_PATH=`pwd`:$LD_LIBRARY_PATH
./mtrec -f mtrec_scp/mtrec_mt_scylla.cfg -t $1 -c $2
