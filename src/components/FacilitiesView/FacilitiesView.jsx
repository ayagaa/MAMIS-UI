import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import "./FacilitiesView.css";

const classes = {
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

export default class FacilitiesView extends Component {
  render() {
    const bull = (
      <span
        style={{
          display: "inline-block",
          margin: "0 2px",
          transform: "scale(0.8)",
        }}
      >
        •
      </span>
    );
    return (
      <div className="facilities-container">
        <div className="facility">
          <Card style={{ maxWidth: 300, backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Juhudi Kilimo
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Litka Square Opposite KCB
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Machakos
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Tel: 254 746 622 550
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Email: info@juhudikilimo.com
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Jitegemea
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Rim House Near KCB
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Mirimums's Street
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Ground Floor Room No. 11
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                Kajiado Namanga Road
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                0733 207 026
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
              Inuka Africa Limited, Matuu
              </Typography>
              <Typography color="textPrimary" gutterBottom>
              Mwamba House, 2nd Floor Room 3, 
              </Typography>
              <Typography color="textPrimary" gutterBottom>
              Mwamba House, 2nd Floor Room 3, 
              </Typography>
              <Typography color="textPrimary" gutterBottom>
              building with M-Kopa solar)
              </Typography>
              <Typography color="textPrimary" gutterBottom>
              Tel: 254758704480
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Kenya Women Microfinance Bank
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                KWFT Building, Syokimau Rd 
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                P.O. Box 126 90100
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Tel. 044-2020551/4 / 044-
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                2021402/98 / 0705-114188
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Machakos
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Musoni Microfinance Ltd
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Cape Office Park along
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Ring Road Kilimani, Opp Yaya Centre
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                P.O. Box 25351 – 00100
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Tel: 0709 761101
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                BIMAS
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Machakos
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Machakos
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Kinyari Building, Behind Equity Bank
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Tel: 0723795810
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                ECLOF Kenya
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Machakos Branch
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Machakos
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Shanbad House,2nd Floor, Next to 
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Metropolitan Sacco
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Tel: 0796864682
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Agricultural Finance Corporation (AFC)
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Machakos, Ngei Rd
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                P.O. Box 332-90100
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Tel: 020-2624249
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Email: afcmachakos@agrifinance.org
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                UAP
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Machakos Branch Ground floor,
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Mutungoni Building, Syokimau
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Street, Tel: +254 04420
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                20011/21462
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{ backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Waumini Insurance Brokers Limited,
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                P.O. Box 13475-00800, Nairobi.
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                New Waumini House – 4th Floor
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Contact:  +254  722 200 403 | +254
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                731 001 463 
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
        <div className="facility">
          <Card style={{backgroundColor: "#5B9BD5" }}>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Acre Africa
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Ground Floor, Zep Re Place,
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                Longonot Place, Upper Hill Nairobi
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                +254 719 249 615
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
              >
                +255 767 200 012
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </div>
      </div>
    );
  }
}
