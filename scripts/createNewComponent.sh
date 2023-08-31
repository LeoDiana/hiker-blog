#!/bin/bash

pwd

echo "Enter component name:"

read NAME

cp -R "./scripts/Component" "./scripts/$NAME"
mv "./scripts/$NAME/Component.tsx" "./scripts/$NAME/$NAME.tsx"

sed -i "" "s|Component|${NAME}|g" "./scripts/$NAME/$NAME.tsx"
sed -i "" "s|Component|${NAME}|g" "./scripts/$NAME/index.ts"
sed -i "" "s|Component|${NAME}|g" "./scripts/$NAME/styles.ts"

echo "Boilerplate for $NAME was created inside scripts folder. Move it anywhere you want."

