import { Button } from "react-bootstrap";
import Submit from "./Submit.jsx";
import useStyles from "./styles.jsx";

const Btn = () => {
  const { handleSubmit, handleClear } = Submit();
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="primary"
        type="submit"
        className={classes.btn}
        onClick={handleSubmit}
      >
        Save
      </Button>
      <Button
        variant="primary"
        type="submit"
        className={classes.btn}
        onClick={handleClear}
      >
        Clear
      </Button>
    </div>
  );
};

export default Btn;
