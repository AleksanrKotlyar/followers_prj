import styled from 'styled-components';

export const FilterLabelForm = styled('label')`
  margin-right: 10px;
  font-weight: 600;
`;

export const FilterInputForm = styled.input`
  background-color: ${p => p.theme.colors.inputColor};
  width: 200px;
  box-shadow: ${p => p.theme.shadows.input};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.colorInteract};
    box-shadow: none;
  }
`;

// .input {
//   align-self: flex-start;
// }
