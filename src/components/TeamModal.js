import React, { Component } from 'react';

class TeamModal extends Component {
    render() {
        return(
            <div className={this.props.display?"fadeIn":"fadeOut"} id="team-page">
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
                <tr className="leader">
                  <td>Nguyễn Tiến Minh</td>
                  <td>minhnt</td>
                </tr>
                <tr>
                  <td>Trần Mạnh Cường</td>
                  <td>maytinhdibo</td>
                </tr>
                <tr>
                  <td>Trần Minh Quý</td>
                  <td>quytm</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr> <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
                <tr>
                  <td>Đỗ Văn Sĩ</td>
                  <td>sido</td>
                </tr>
              </table>
              </div>
            </div>
          </div>
        );
    }
}
export default TeamModal;