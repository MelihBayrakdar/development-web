import * as React from 'react'
import { RouteComponentProps } from "react-router";
import { Zoo, Animal } from '../types';

export let ZooFC : React.FunctionComponent<Zoo> = (m) => {
  return <div>
    <div>Name: {m.Name}</div>
  </div>
}


//implement a function component AnimalFC that takes in input an animal and prints 
//its details as in the image provided in the text
//TODO 7: [1pt]
...