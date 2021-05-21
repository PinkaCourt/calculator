import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

export type Beer = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  [key: string]: any;
};

type Props = {
  beer: Beer;
};

const useStyles = makeStyles((theme) => ({
  media: {
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    textAlign: "center",
  },
}));

const BeerCard: React.FC<Props> = ({ beer }) => {
  const { name, tagline, description, image_url } = beer;
  const styles = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Card>
      <CardHeader className={styles.header} title={name} subheader={tagline} />
      <CardMedia
        component="img"
        height="300"
        className={styles.media}
        image={image_url}
        title={name}
      />

      <CardActions>
        <IconButton onClick={handleOpen} color="primary">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography> {description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BeerCard;
