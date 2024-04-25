<<<<<<< HEAD
import styled, { css, keyframes } from 'styled-components';
import {
  padding,
  color,
  layout,
  variant,
  compose,
  PaddingProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'animated';
}

const animation = keyframes`
  0% {
    background-position: 0 50%;
  }

  20% {
    background-position: 35% 80%;
  }

  40% {
    background-position: 100% 50%;
  }

  60% {
    background-position: 70% 0;
  }

  80% {
    background-position: 70% 0;
  }

  100% {
    background-position: 0 50%;
  }
`;

const Button = styled.button<
  ButtonProps & PaddingProps & ColorProps & LayoutProps
>`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  display: inline-block;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding: 18px 50px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: ease-in-out 0.15s;
  outline: 0;
  color: white;

  ${({ variant }) =>
    variant === 'animated' &&
    css`
      animation: ${animation} 2s linear infinite;
    `}
  ${compose(padding, color, layout)}
  
  ${variant({
    variants: {
      animated: {
        background:
          'linear-gradient(200deg, rgb(255, 95, 109),rgb(255, 195, 113))',
      },
      primary: {
        color: 'white',
        backgroundColor: '#0e0e0e',
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
          transform: 'scale(1.04)',
        },
      },
      secondary: {
        color: 'black',
        backgroundColor: '#f5f6fa',
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
          transform: 'scale(1.04)',
        },
      },
    },
  })};
`;

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
=======
import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
>>>>>>> 4b7fdea (first commit)
