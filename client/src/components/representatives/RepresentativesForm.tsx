import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { getRepresentatives, IAddressWithFilter } from "../../store/actions";
import { Store } from "../../store/Store";
import { useForm, Form } from "../utils/useForm";

const initialFValues: IAddressWithFilter = {
  locationName: "",
  line1: "",
  line2: "",
  line3: "",
  city: "",
  state: "",
  zip: "",

  federalFilter: true,
  stateFilter: true,
  countyFilter: true,
  localFilter: true,
};

enum FilterOptions {
  federalFilter = "country",
  stateFilter = "administrativeArea1",
  countyFilter = "administrativeArea2",
  localFilter = "locality",
}

const RepresentativesForm = () => {
  const { dispatch } = useContext(Store);
  const { values, onChange, handleCheckbox } = useForm<IAddressWithFilter>(
    initialFValues
  );

  const {
    line1,
    line2,
    line3,
    city,
    state: residentState,
    zip,
    federalFilter,
    stateFilter,
    countyFilter,
    localFilter,
  } = values;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const filters: string[] = [];

    if (federalFilter) filters.push(FilterOptions.federalFilter);
    if (stateFilter) filters.push(FilterOptions.stateFilter);
    if (countyFilter) filters.push(FilterOptions.countyFilter);
    if (localFilter) filters.push(FilterOptions.localFilter);

    if (filters.length === 0) {
      alert("You must select at least one filter");
      return;
    }

    getRepresentatives(dispatch, filters, values);
  };

  return (
    <Form>
      <Grid container>
        {/* Address Form Inputs */}
        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            label="Line 1"
            name="line1"
            value={line1}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="Line 2 (Optional)"
            name="line2"
            value={line2}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="Line 3 (Optional)"
            name="line3"
            value={line3}
            onChange={onChange}
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            label="City"
            name="city"
            value={city}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="State"
            name="state"
            value={residentState}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="Zip Code"
            name="zip"
            value={zip}
            onChange={onChange}
          />
        </Grid>

        {/* Filter checkboxes */}
        <Grid xs={12} alignItems="center" justify="center" item container>
          <Grid item>
            <Typography variant="h6" style={{ marginRight: "1rem" }}>
              Filters:{" "}
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={federalFilter}
                  onChange={handleCheckbox}
                  name="federalFilter"
                />
              }
              label="Federal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={stateFilter}
                  onChange={handleCheckbox}
                  name="stateFilter"
                />
              }
              label="State"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={countyFilter}
                  onChange={handleCheckbox}
                  name="countyFilter"
                />
              }
              label="County"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={localFilter}
                  onChange={handleCheckbox}
                  name="localFilter"
                />
              }
              label="Local"
            />
          </Grid>
        </Grid>
        <Grid xs={12} style={{ marginTop: "1rem" }} item>
          <Button
            onClick={onSubmit}
            fullWidth
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default RepresentativesForm;
