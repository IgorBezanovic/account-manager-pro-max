import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlateCalculator from "../../pages/PlateCalculator/PlateCalculator";

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState("");

    const handleOpenModal = (title: string, component: React.ReactNode) => {
        setModalTitle(title);
        setActiveComponent(component);
        setModalOpen(true);
        onClose();
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setActiveComponent(null);
    };

    return (
        <>
            <Drawer anchor="left" open={open} onClose={onClose}>
                <Box sx={{ width: 250, padding: 2 }}>
                    <IconButton onClick={onClose} sx={{ mb: 2 }}>
                        <CloseIcon />
                    </IconButton>
                    <List>
                        <Button onClick={() => handleOpenModal("Obracun Plate", <PlateCalculator />)}>
                            <ListItemText primary="Obracun Plate" />
                        </Button>
                    </List>
                </Box>
            </Drawer>

            <Dialog open={modalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent dividers>{activeComponent}</DialogContent>
            </Dialog>
        </>
    );
};

export default Sidebar;