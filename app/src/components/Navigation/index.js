import React, {Component} from 'react'
import {Link} from 'react-router'
import {Menu, Button} from 'antd'
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Navigation extends Component {
  render () {
    return (
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link to='/'><Button type='primary'>main</Button></Link>
        </Menu.Item>
        <SubMenu title='Animal'>
          <MenuItemGroup>
            <Menu.Item>
              <Link to='/cat'>cat</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/dog'>dog</Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

export default Navigation
