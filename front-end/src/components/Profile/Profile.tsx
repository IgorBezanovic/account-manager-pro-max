import React, { useState } from "react";
import {
    Alert,
    Button,
    Card,
    CircularProgress,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { getToken } from "../../helpers";

// Define the shape of the form data
interface ProfileFormValues {
    username: string;
    email: string;
    avatar_url?: string;
    about?: string;
    twitter_username?: string;
    linkedin_username?: string;
    github_username?: string;
    website_url?: string;
}

const Profile: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { user, isLoading, setUser } = useAuthContext();
    const [formValues, setFormValues] = useState<ProfileFormValues>({
        username: user?.username || "",
        email: user?.email || "",
        avatar_url: user?.avatar_url || "",
        about: user?.about || "",
        twitter_username: user?.twitter_username || "",
        linkedin_username: user?.linkedin_username || "",
        github_username: user?.github_username || "",
        website_url: user?.website_url || "",
    });
    const [error, setError] = useState<string>("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleProfileUpdate = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${API}/users/${user?.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(formValues),
            });

            const responseData = await response.json();
            setUser(responseData);
        } catch (err) {
            console.error(err);
            setError("Error while updating the profile!");
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <CircularProgress size={48} />;
    }

    return (
        <Card sx={{ padding: 4 }}>
            <Typography variant="h5" gutterBottom>
                Profile
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
                    {error}
                </Alert>
            )}

            <form onSubmit={handleProfileUpdate} noValidate>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Avatar URL"
                            name="avatar_url"
                            type="url"
                            value={formValues.avatar_url}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="About"
                            name="about"
                            multiline
                            rows={6}
                            value={formValues.about}
                            onChange={handleChange}
                            inputProps={{ maxLength: 120 }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Twitter Username"
                            name="twitter_username"
                            value={formValues.twitter_username}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="LinkedIn Username"
                            name="linkedin_username"
                            value={formValues.linkedin_username}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Github Username"
                            name="github_username"
                            value={formValues.github_username}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Website URL"
                            name="website_url"
                            type="url"
                            value={formValues.website_url}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 3 }}
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <CircularProgress size={20} sx={{ mr: 1 }} /> Saving
                        </>
                    ) : (
                        "Save"
                    )}
                </Button>
            </form>
        </Card>
    );
};

export default Profile;