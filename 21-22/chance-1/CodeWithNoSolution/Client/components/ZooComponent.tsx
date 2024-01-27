import * as React from 'react'
import { Zoo, Animal } from '../types';
import { Map } from 'immutable'
import { AnimalFC, ZooFC } from '../containers/ZooContainers';
import { Set } from "immutable"


export type ZooComponentState = {
  zoo: { kind: "loaded", value: Zoo[] } | { kind: "loading" } | { kind: "error-or-not-found" } | { kind: "none" }
}
export type ZooComponentProps = {}


export class ZooComponent extends React.Component<ZooComponentProps, ZooComponentState> {

  constructor(props: ZooComponentProps) {
    super(props)
    this.state = {
      zoo: { kind: "none" }

    }
  }

  async processApiZooResponce(res: Response) {


    try {
      if (!res.ok)
        this.setState(s => ({ ...s, zoo: { kind: "error-or-not-found" } }))

      let res1 = await res.json()

      let zoo: Zoo[] = []
      zoo = res1.map((item): Zoo => {
        return { ...item.Zoo, Animals: item.Animals }
      })
      this.setState(s => ({ ...s, zoo: { kind: "loaded", value: zoo } }))
    }
    catch {
      this.setState(s => ({ ...s, zoo: { kind: "error-or-not-found" } }))
    }
  }

  getZoo() {
    this.setState(s => ({ ...s, zoo: { kind: "loading" } }), () => {

      let headers = { 'content-type': 'application/json' }

      fetch(`/zoo/GetAllAnimals`,
        {
          method: 'get',
          headers
        })
        .then(async res => {
          this.processApiZooResponce(res)
        })
    })
  }

  
  getZooBySpecie(specie:string) {
    
    //implement a fetch to get all animals that belong to the provided specie (note that animals are specified via query parameters)
    //also do not forget to set the zoo to "loading" before fetching them
    //TODO 8: [1pt]
    ...
  }

  componentWillMount() {
    this.getZoo()
  }

  public render() {

    if (this.state.zoo.kind != "loaded") {
      return <p>{this.state.zoo.kind}</p>
    }


    return <div className='container-fluid row'>
      <div className="row">
        <div className='col-sm-6'>
          <h2>Zoo</h2>

          <div>
            Filter by:
            {/* 
              Implement filter by that shows a series of "unique" buttons to filter the animals by specie 
              TODO 9: [2.0pt]
            */}
            ...
            <button onClick={_ => this.getZoo()}>Clear search</button>
          </div>
          {this.state.zoo.value.map(p =>
            <div style={{ border: "solid" }}>
              {/* 
                Render a zoo by calling the zoo function component
                TODO 10: [0.5pt]
              */}
              <div>Zoo: ...</div>
              <div>
                Animals:
                <div style={{ paddingLeft: 10 }}>
                  {/* 
                    Render a zoo animals by iterating through its animals and calling the animal function component
                    TODO 11: [0.5pt]
                  */}
                  {p.Animals....}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  }
}