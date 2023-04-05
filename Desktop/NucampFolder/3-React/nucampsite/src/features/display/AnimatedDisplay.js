import { useState, useEffect } from "react";
import { Card, CardImg,CardText, CardBody, CardTitle } from "reactstrap";
import { useSpring, animated } from "react-spring";

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);          //set intial value of toggle to false

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,                          // opacity toggles 
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',  //scale toggles 
        config: { duration : 500 }                        // .5 second duration for effects
    });

    useEffect(() => {
        setToggle(true);                                  //changes toggle to true
    }, []);                                               // [] empty means only run once

    return (
        <animated.div style={animatedStyle}>               
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    )
};

export default AnimatedDisplayCard;