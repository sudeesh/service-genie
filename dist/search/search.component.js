function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { useHistory } from "react-router-dom";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getAllGarages, getAllUniqueGarages } from "../../services/services"; // styles

import "./search.styles.scss";
export default function Search() {
  const [value, setValue] = React.useState("location");
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  let history = useHistory();
  React.useEffect(() => {
    if (value === "location") {
      (async () => {
        await getAllUniqueGarages().then(response => setOptions(response.data)).catch(error => error.message);
      })();
    } else {
      (async () => {
        const nameList = [];
        await getAllGarages().then(response => response.data.map(x => nameList.push(x.garageTitle))).catch(error => error.message);
        setOptions(nameList);
      })();
    }
  }, [open, value]);
  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const selectChange = (event, val) => {
    if (value === "location") {
      history.push({
        pathname: "/location-list",
        search: `?location=${val}`,
        state: {
          val,
          searchName: "location"
        }
      });
    } else {
      history.push({
        pathname: "/location-list",
        search: `?garageName=${val}`,
        state: {
          val,
          searchName: "garage"
        }
      });
    }
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "center",
    alignItems: "center",
    className: "search-container"
  }, /*#__PURE__*/React.createElement(Grid, {
    items: true,
    xs: 8
  }, /*#__PURE__*/React.createElement("div", {
    className: "row center flex-column"
  }, /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(FormLabel, {
    component: "legend",
    className: "option-heading"
  }, "Search by"), /*#__PURE__*/React.createElement(RadioGroup, {
    "aria-label": "search",
    name: "search",
    value: value,
    onChange: handleChange,
    row: true
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    value: "location",
    control: /*#__PURE__*/React.createElement(Radio, {
      color: "primary"
    }),
    label: "Location"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    value: "garage",
    control: /*#__PURE__*/React.createElement(Radio, {
      color: "primary"
    }),
    label: "Garage"
  }))), /*#__PURE__*/React.createElement(Autocomplete, {
    id: "garage-select",
    style: {
      width: 300
    },
    options: options,
    autoHighlight: true,
    getOptionLabel: option => option,
    onChange: selectChange,
    onOpen: () => {
      setOpen(true);
    },
    onClose: () => {
      setOpen(false);
    },
    renderOption: option => /*#__PURE__*/React.createElement(React.Fragment, null, option),
    renderInput: params => /*#__PURE__*/React.createElement(TextField, _extends({}, params, {
      label: "Choose a location",
      variant: "outlined",
      inputProps: { ...params.inputProps
      }
    }))
  }))));
}