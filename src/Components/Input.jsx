import styled from 'styled-components';

const AdaptivePlaceholder = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: ${({ height, border }) => `calc(${height} + ${border * 2})`};
  margin: 0 0 ${({ margin }) => margin};
  padding: ${({ margin }) => margin};
  border: ${({ border }) => `${border}px solid #ccc`};
  border-radius: ${({ radius }) => radius};
  background: #fff;
  resize: none;
  outline: none;

  &:required {
    &:focus {
      border-color: #000000;

      + label[placeholder] {
        &:before {
          color: #000000;
        }
      }
    }

    &:focus,
    &:valid {
      + label[placeholder] {
        &:before {
          transition-duration: .2s;
          transform: translate(0, ${({ margin }) => `${margin * -1.5}px`}) scale(.9, .9);
        }
      }
    }

    &:invalid {
      + label[placeholder][alt]:before {
        content: attr(alt);
      }
    }

    + label[placeholder] {
      display: block;
      pointer-events: none;
      line-height: ${({ margin }) => `${margin * 1.25}px`};
      margin-top: ${({ height, border }) => `calc(-${height} - ${border * 2})`};
      margin-bottom: ${({ height, margin, border }) => `calc((${height} - ${margin}) + ${border * 2})`};

      &:before {
        content: attr(placeholder);
        display: inline-block;
        margin: 0 ${({ margin, border }) => `calc(${margin} + ${border * 2})px`};
        padding: 0 2px;
        color: #898989;
        white-space: nowrap;
        transition: .3s ease-in-out;
        background-image: linear-gradient(to bottom, #fff, #fff);
        background-size: 100% 5px;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;

const Input = (props) => {
    <AdaptivePlaceholder 
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type}
    />
}
/*
(styled.input`
  &[type="text"] {
    ${AdaptivePlaceholder} {
      ${({ height }) => `height: ${height};`}
      ${({ height }) => `line-height: ${height};`}
    }
  }
`;)
*/
export default Input;