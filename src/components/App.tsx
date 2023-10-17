import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

const tshirts: any[string] = {
  white:
    "https://i.ibb.co/C2c8LmL/isolated-black-t-shirt-front-125540-1167.jpg",
  black:
    "https://i.ibb.co/jrnH35C/isolated-white-t-shirt-front-view-125540-1194.jpg",
  gray: "https://i.ibb.co/W6dwT6T/gray-t-shirt-with-gray-band-it-is-hanging-wall-873925-175004.jpg",
  blue: "https://i.ibb.co/f9vQt4L/black-white-color-men-s-tshirts-design-template-236836-22580.jpg",
  red: "https://i.ibb.co/6tCyddM/red-sleeveless-t-shirt-t-shirt-front-view-three-positions-white-background-508835-6937.jpg",
};

const hrStyle = {
  borderBottom: "1px solid lightgray",
};

const App = () => {
  const [shirtImage, setShirtImage] = useState("black");
  const [upperText, setUpperText] = useState("Upper Text");
  const [lowerText, setLowerText] = useState("Lower Text");
  const [textSize, setTextSize] = useState(36);
  const [textColor, setTextColor] = useState("white");
  const [imageWidth, setImageWidth] = useState(200);

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex p="10px" gap="10px" flexDir={isLargerThan800 ? "row" : "column"}>
      <Flex
        maxH="80vh"
        flexGrow="2"
        justifyContent="center"
        pos="relative"
        boxShadow="0 0 3px lightgray"
      >
        <Image src={tshirts[shirtImage]} objectFit="contain" />
        <Flex
          pos="absolute"
          h="100%"
          w="100%"
          zIndex={10}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={textColor} fontWeight="bold" fontSize={`${textSize}px`}>
            {upperText}
          </Text>
          <Flex
            w={`${imageWidth}px`}
            h={`${0.75 * imageWidth}px`}
            bg="white"
          ></Flex>
          <Text color={textColor} fontWeight="bold" fontSize={`${textSize}px`}>
            {lowerText}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        flexGrow="1"
        p="10px 25px"
        gap="10px"
        boxShadow="0 0 3px lightgray"
      >
        <Heading alignSelf="center">Settings</Heading>
        <Text fontSize="24px">Change T-shirt Color</Text>
        <Flex gap="10px">
          {Object.entries(tshirts).map(([key, value]) => (
            <Image
              boxSize="100px"
              objectFit="cover"
              key={key}
              src={value as string}
              onClick={() => setShirtImage(key)}
            />
          ))}
        </Flex>
        <hr style={hrStyle} />
        <Text fontSize="24px">Change Image</Text>
        <Input variant="flushed" type="file" />
        <Button w="fit-content" colorScheme="teal" borderRadius="0">
          Upload Now
        </Button>
        <hr style={hrStyle} />
        <Text fontSize="24px">Write Text</Text>
        <Text>Upper Text</Text>
        <Input
          type="text"
          variant="flushed"
          textAlign="center"
          placeholder="Upper Text"
          value={upperText}
          onChange={(e) => setUpperText(e.target.value)}
        />
        <Text>Lower Text</Text>
        <Input
          type="text"
          variant="flushed"
          textAlign="center"
          placeholder="Lower Text"
          value={lowerText}
          onChange={(e) => setLowerText(e.target.value)}
        />
        <Flex gap="20px">
          <Flex flexDir="column" flexGrow="1" gap="20px">
            <Text>Text Size</Text>
            <RangeSlider
              aria-label={["value"]}
              colorScheme="teal"
              defaultValue={[36]}
              onChangeEnd={(val) => setTextSize(val[0])}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
            <Text>Image Width</Text>
            <RangeSlider
              aria-label={["value"]}
              colorScheme="teal"
              min={50}
              max={300}
              defaultValue={[150]}
              onChangeEnd={(val) => setImageWidth(val[0])}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Flex>
          <Flex flexDir="column" flexGrow="1" gap="20px">
            <Text>Text Color</Text>
            <RadioGroup onChange={setTextColor} value={textColor}>
              <VStack alignItems="flex-start">
                <Radio value="black">Black</Radio>
                <Radio value="white">White</Radio>
                <Radio value="blue">Blue</Radio>
                <Radio value="red">Red</Radio>
              </VStack>
            </RadioGroup>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
