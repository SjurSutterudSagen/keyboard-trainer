DIR="zmk"

if [ -d "$DIR" ]; then
    echo "ZMK firmware directory exists"
elif [ -f "$DIR" ]; then
    echo "ZMK firmware directory exists but is a file"
else
    echo "Cloning ZMK firmware..."

    git clone https://github.com/zmkfirmware/zmk.git "$DIR"
fi