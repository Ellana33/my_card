import styled from 'styled-components';

const Img = styled.img`
    float: left;
`

function Image() {
    return (
        <Img src="src/assets/ladygaga.jpg" alt="lady gaga"></Img>
    )
}

export default Image