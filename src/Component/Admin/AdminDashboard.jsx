// // src/AdminDashboard.jsx
// import React, { useState } from 'react';
// import { NavLink, Route, Routes } from 'react-router-dom';
// import { Drawer, List, ListItem, ListItemText, Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu'; // Corrected import
// import Category from './Categories';
// import Subcategory from './Subcategories';
// import NestedSubCategory from './NestedSubCategories';

// const drawerWidth = 240;

// const AdminDashboard = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <List>
//         <ListItem button component={NavLink} to="/category">
//           <ListItemText primary="Category" />
//         </ListItem>
//         <ListItem button component={NavLink} to="/subcategory">
//           <ListItemText primary="Subcategory" />
//         </ListItem>
//         <ListItem button component={NavLink} to="/nestedsubcategory">
//           <ListItemText primary="Nested Subcategory" />
//         </ListItem>
//       </List>
//     </div>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//           display: { xs: 'none', sm: 'block' },
//         }}
//       >
//         {drawer}
//       </Drawer>
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile.
//         }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           [`& .MuiDrawer-paper`]: { boxSizing: 'border-box', width: drawerWidth },
//         }}
//       >
//         {drawer}
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         <Routes>
//           <Route path="/category" element={<Category />} />
//           <Route path="/subcategory" element={<Subcategory />} />
//           <Route path="/nestedsubcategory" element={<NestedSubCategory />} />
//           <Route path="/" element={<Category />} />
//         </Routes>
//       </Box>
//     </Box>
//   );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Category from './Categories';
import Subcategory from './Subcategories';
import NestedSubCategory from './NestedSubCategories';

const drawerWidth = 240;

const AdminDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem button component={NavLink} to="/category">
          <ListItemText primary="Category" />
        </ListItem>
        <ListItem button component={NavLink} to="/subcategory">
          <ListItemText primary="Subcategory" />
        </ListItem>
        <ListItem button component={NavLink} to="/nestedsubcategory">
          <ListItemText primary="Nested Subcategory" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          display: { xs: 'none', sm: 'block' },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          [`& .MuiDrawer-paper`]: { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="/category" element={<Category />} />
          <Route path="/subcategory" element={<Subcategory />} />
          <Route path="/nestedsubcategory" element={<NestedSubCategory />} />
          <Route path="/" element={<Category />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
