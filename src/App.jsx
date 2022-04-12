import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItems"

import * as API from "./services/launches";


export function App() {
  const [launches, setLaunches] = useState([]);
  useEffect(()=> {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
    <Heading as="h1" size="lg" mg={14}>
      SpaceX Launches
    </Heading> 
    <section>
      {launches.map((launch) => (
         <LaunchItem key={launch.flight_number} {...launch}/>
        ))
      }
    </section>
    </>
  )
}




