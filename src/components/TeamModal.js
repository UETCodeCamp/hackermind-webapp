import React, { Component } from 'react';

class TeamModal extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        list: [
          {
            name: "Nguyễn Tiến Minh",
            username: "minhnt",
            leader: true
          },
          {
            name: "Trần Minh Quý",
            username: "quytm",
            leader: false
          },
          {
            name: "Trần Mạnh Cường",
            username: "maytinhdibo",
            leader: false
          },
          {
            name: "Hạp Tiến Quân",
            username: "quanht",
            leader: false
          },
          {
            name: "Trần Mạnh Cường",
            username: "maytinhdibo",
            leader: false
          },
          {
            name: "Trần Mạnh Cường",
            username: "maytinhdibo",
            leader: false
          },
          {
            name: "Trần Mạnh Cường",
            username: "maytinhdibo",
            leader: false
          }
        ]
      }


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
                      <tr className={item.leader?"leader":""}>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
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