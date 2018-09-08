#!/bin/bash

function get_file {
  DOWNLOAD_PATH=${2}?raw=true
  FILE_NAME=$1
  if [ "${FILE_NAME:0:1}" = "/" ]; then
    SAVE_PATH=$FILE_NAME
  else
    SAVE_PATH=$3$FILE_NAME
  fi
  TMP_NAME=${1}.tmp
  echo "Getting $1"
  # wget $DOWNLOAD_PATH -q -O $TMP_NAME
  curl -s -q -L -o $TMP_NAME $DOWNLOAD_PATH
  rv=$?
  if [ $rv != 0 ]; then
    rm $TMP_NAME
    echo "Download failed with error $rv"
    exit
  fi
  diff ${SAVE_PATH} $TMP_NAME &>/dev/null
  if [ $? == 0 ]; then
    echo "File up to date."
    rm $TMP_NAME
    return 0
  else
    mv $TMP_NAME ${SAVE_PATH}
    if [ $1 == $0 ]; then
      chmod u+x $0
      echo "Restarting"
      $0
      exit $?
    else
      return 1
    fi
  fi
}

function check_dir {
  if [ ! -d $1 ]; then
    read -p "$1 dir not found. Create? (y/n): [n] " r
    r=${r:-n}
    if [[ $r == 'y' || $r == 'Y' ]]; then
      mkdir -p $1
    else
      exit
    fi
  fi
}

if [ ! -f configuration.yaml ]; then
  echo "There is no configuration.yaml in current dir. 'update.sh' should run from Homeassistant config dir"
  read -p "Are you sure you want to continue? (y/n): [n] " r
  r=${r:-n}
  if [[ $r == 'n' || $r == 'N' ]]; then
    exit
  fi
fi

# get_file $0 https://github.com/covrig/homeassistant-hline/blob/master/update.sh ./


check_dir "www/custom_ui"

# Hline
get_file state-card-hline.html https://raw.githubusercontent.com/covrig/homeassistant-hline/master/www/custom_ui/state-card-hline.html www/custom_ui/
get_file state-card-hline_es5.html https://raw.githubusercontent.com/covrig/homeassistant-hline/master/www/custom_ui/state-card-hline_es5.html www/custom_ui/

# Tiles
# get_file state-card-tiles.html https://raw.githubusercontent.com/c727/home-assistant-tiles/master/www/custom_ui/state-card-tiles.html www/custom_ui/
# get_file state-card-tiles_es5.html https://raw.githubusercontent.com/c727/home-assistant-tiles/master/www/custom_ui/state-card-tiles_es5.html www/custom_ui/
