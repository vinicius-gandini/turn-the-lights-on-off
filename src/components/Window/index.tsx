import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface WindowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  selected: boolean;
}

const Window: React.FC<WindowProps> = ({ onClick, selected }) => {
  return (
    <Container isClicked={selected}>
      <button type="button" onClick={onClick} />
    </Container>
  );
};

export default Window;
