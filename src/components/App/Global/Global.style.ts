import { withStyles } from "@material-ui/core";

const GlobalCss = withStyles({
    "@global": {
      "html, body": {
        margin: 0,
        padding: 0,
        borderBox: 'box-sizing'
      }
    }
  })(() => null);

  export default GlobalCss