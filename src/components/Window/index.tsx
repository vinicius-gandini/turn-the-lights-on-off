import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface WindowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Window: React.FC<WindowProps> = ({ onClick }) => {
  return (
    <Container>
      <button type="button" onClick={onClick} />
    </Container>
  );
};

export default Window;
