import React, { Component } from 'react';
import { getTeamMate } from '../services/API';

class TeamModal extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        list: []
      }
  }
  componentDidMount() {
    getTeamMate(localStorage.team_id).then(object=>{
      console.log(object);
      if(object.success){
        this.setState({
          list:object.data.team.users
        });
      }
    });
  }
  render() {
    return (
      <div className={this.props.display ? "fadeIn" : "fadeOut"} id="team-page">
        <div id="team-modal">
          <div className="modal-header">
            Đồng hành cùng tôi
                <i onClick={this.props.closeTeamModal} class="fas fa-times-circle modal-close"></i>
          </div>
          <div className="table">
            <table className="list-user">
              <tr>
                <th>Tên</th>
                <th>Tài khoản</th>
              </tr>

              {
                this.state.list.map(
                  item => {
                    return (
                      <tr className={item.role_id==2 ? "leader" : ""}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                      </tr>
                    );
                  }
                )
              }
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamModal;