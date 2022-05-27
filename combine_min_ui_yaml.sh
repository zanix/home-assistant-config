#!/bin/bash
# Combine yaml from Minimalist UI for use in UI config.
#

SOURCE=custom_components/ui_lovelace_minimalist/__ui_minimalist__/ulm_templates/
DEST=lovelace/minimalist.yaml

# Cat all ui_minimalist yaml files into one.
find $SOURCE -type f -name '*.yaml' -exec cat {} + > $DEST
# Remove triple dashes.
gawk -i inplace '!/---/' $DEST
# Indent all line by 2 spaces.
sed -i -e 's/^/  /' $DEST
# Insert button_card_templates at the top.
sed -i '1s/^/button_card_templates:\n/' $DEST
