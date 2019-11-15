//imports
import React, { Component } from 'react';
import ReactTable from "react-table";


class Records extends Component {

    tabData = () => {
        const data = [
          {
            name: "danish",
            age: 20,
            friend: {
              name: "faraz",
              age: 19
            }
          },
          {
            name: "aakash",
            age: 16,
            friend: {
              name: "qadir",
              age: 17
            }
          },
          {
            name: "fattah",
            age: 10,
            friend: {
              name: "fawad",
              age: 12
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
          {
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },{
            name: "yousha",
            age: 15,
            friend: {
              name: "mehdi",
              age: 16
            }
          },
        ];
        const columns = [
          {
            Header: "Name",
            accessor: "name", // String-based value accessors!
           
            style :{
                textAlign:"center"
                
            },
            
          },
          {
            Header: "Age",
            accessor: "age",
            Cell: props => <span className="number">{props.value}</span> // Custom cell components!
          },
          {
            id: "friendName", // Required because our accessor is not a string
            Header: "Friend Name",
            accessor: d => d.friend.name // Custom value accessors!
          },
          {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: "friend.age"
          }
          
        ];
    
        return (
          <ReactTable
            data={data}
            columns={columns}
            resolveData={data => data.map(row => row)}
            // sortable={false}
            filterable={true}
            // loading ={false}
            // showPagination={false}
            // showPaginationTop={true}
            showPaginationBottom={true}
            showPageSizeOptions={true}
            // minRows= {undefined}
            // pageSizeOptions = {[1, 2, 3, 4, 5, 6]}
            defaultPageSize={5}
            // showPageJump={false}
            // collapseOnSortingChange={false}
            // collapseOnPageChange={true}
            // collapseOnDataChange={true}
            // freezeWhenExpanded={true}
            // sortable={true}
            // multiSort={false}
            // resizable={true}
            // filterable={false}
            // defaultSortDesc={false}
            // page={undefined}
            // pageSize={3}
            // sorted={[]}
            // filtered={[]}
            // resized={[]}
            // expanded={{}}
          />
        );
      };
    

    render() {
        return (
            <div className="container">
          {this.tabData()}
            </div>
        )
    }
}

export default Records;



