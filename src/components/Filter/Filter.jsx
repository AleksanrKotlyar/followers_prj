import { Input } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "components/PhoneBook/PhoneBook.styled";
// import { FilterLabelForm, FilterInputForm } from './Filter.styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { getValue } from "redux/filterSlice";
import { getFilter } from "redux/contacts/selectors";
import { FilterLabelForm } from "./Filter.styled";

const FilterInput = createTheme({
	components: {
		MuiInput: {
			styleOverrides: {
				root: {
					"&:after": {
						borderBottomColor: "#eab013ba",
					},
				},
				input: {
					fontFamily: "Ubuntu",
					fontSize: "14px",
					color: "#000000",
					padding: "0",
				},
			},
		},
	},
});

export const Filter = () => {
	const dispatch = useDispatch();
	const value = useSelector(getFilter);

	return (
		<Box display="flex" alignItems="flex-end" mb="15px">
			<FilterLabelForm htmlFor="filterInputId">
				Find contacts by name:
			</FilterLabelForm>

			<ThemeProvider theme={FilterInput}>
				<Input
					id="filterInputId"
					type="text"
					name="filter"
					value={value}
					onChange={(e) => dispatch(getValue(e.target.value))}
					autoComplete="off"
				/>
			</ThemeProvider>
		</Box>
		/* <FilterLabelForm>
      Find contacts by name
      <FilterInputForm
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => dispatch(getValue(e.target.value))}
      />
    </FilterLabelForm> */
	);
};

// Filter.propTypes = {
//   handleFilterOnInputChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
