DIR="zmk"

if [ -d "$DIR" ]; then
    echo "ZMK firmware directory exists"
elif [ -f "$DIR" ]; then
    echo "ZMK firmware directory exists but is a file"
else
    echo "ZMK folder does not exist. Exiting."

    exit 1
fi

echo "Generating layouts and keymaps for ZMK..."