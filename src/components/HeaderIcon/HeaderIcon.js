import React, { Fragment } from 'react';
import styled from 'styled-components';
import { VelocityComponent } from 'velocity-react';

import { RightArrowIcon } from 'components/Icons';

HeaderIcon.defaultProps = {
  animationOptions: {
    duration: 500,
    rotateZ: 90,
    useAnimation: false,
  },
};

function AnimationWrapper({ useAnimation, children, ...props }) {
  if (useAnimation) {
    return <VelocityComponent {...props}>{children}</VelocityComponent>;
  }
  return <Fragment>{children}</Fragment>;
}

function HeaderIcon({
  icon: Icon,
  open,
  useAnimation,
  animationOptions: { duration, rotateZ },
  color,
}) {
  return (
    <Container>
      <AnimationWrapper
        useAnimation={Icon ? useAnimation : true}
        animation={{ rotateZ: open ? rotateZ : 0 }}
        duration={duration}
      >
        {Icon ? <Icon color={color} /> : <RightArrowIcon color={color} />}
      </AnimationWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-right: 10px;
`;

export default HeaderIcon;
