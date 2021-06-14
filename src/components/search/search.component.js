import React from "react";
import { useHistory } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Grid,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getAllGarages, getAllUniqueGarages } from "../../services/services";

// styles
import "./search.styles.scss";

export default function Search() {
  const [value, setValue] = React.useState("location");
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  let history = useHistory();

  React.useEffect(() => {
    if (value === "location") {
      (async () => {
        await getAllUniqueGarages()
          .then((response) => setOptions(response.data))
          .catch((error) => error.message);
      })();
    } else {
      (async () => {
        const nameList = [];
        await getAllGarages()
          .then((response) =>
            response.data.map((x) => nameList.push(x.garageTitle))
          )
          .catch((error) => error.message);
        setOptions(nameList);
      })();
    }
  }, [open, value]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const selectChange = (event, val) => {
    if (value === "location") {
      history.push({
        pathname: "/location-list",
        search: `?location=${val}`,
        state: { val, searchName: "location" },
      });
    } else {
      history.push({
        pathname: "/location-list",
        search: `?garageName=${val}`,
        state: { val, searchName: "garage" },
      });
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="search-container"
    >
      <Grid item xs={8}>
        <div className="row center flex-column">
          <FormControl>
            <FormLabel component="legend" className="option-heading">
              Search by
            </FormLabel>
            <RadioGroup
              aria-label="search"
              name="search"
              value={value}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="location"
                control={<Radio color="primary" />}
                label="Location"
              />
              <FormControlLabel
                value="garage"
                control={<Radio color="primary" />}
                label="Garage"
              />
            </RadioGroup>
          </FormControl>

          <Autocomplete
            id="garage-select"
            style={{ width: 300 }}
            options={options}
            autoHighlight
            getOptionLabel={(option) => option}
            onChange={selectChange}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            renderOption={(option) => <React.Fragment>{option}</React.Fragment>}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  value === "location" ? "Choose location" : "Choose garage"
                }
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </div>
      </Grid>
    </Grid>
  );
}
