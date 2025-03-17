let TextInput;

function setup() {
  createCanvas(windowWidth, windowHeight);
  TextInput = createInput().attribute("placeholder", "enter text to hash")
  TextInput.position(width/2 - 10, 50)
}

function draw() {
  background(220);

  text(TextInput.value(), width/2, 135);

  text(TextInput.value().hashEncode(), width/2, 200);

}
