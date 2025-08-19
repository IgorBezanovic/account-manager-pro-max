import {
    Alert,
    Button,
    Card,
    CircularProgress,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useScreenSize from "../../hooks/useScreenSize";
import { API } from "../../constant";
import { setToken } from "../../helpers";

// Form values type
interface FormValues {
    username: string;
    email: string;
    password: string;
}

// API response type
interface AuthResponse {
    jwt: string;
    user: {
        id: number;
        username: string;
        email: string;
        [key: string]: any;
    };
    error?: {
        message: string;
    };
}

const SignUp: React.FC = () => {
    const { isDesktopView } = useScreenSize();
    const navigate = useNavigate();
    const { setUser } = useAuthContext();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [formValues, setFormValues] = useState<FormValues>({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${API}/auth/local/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues),
            });

            const data: AuthResponse = await response.json();

            if (data?.error) {
                throw new Error(data.error.message);
            }

            setToken(data.jwt);
            setUser(data.user);

            navigate("/home", { replace: true });
        } catch (err: any) {
            console.error(err);
            setError(err?.message ?? "Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <Grid size={{ xs: 12, md: isDesktopView ? 6 : 12, lg: isDesktopView ? 4 : 12 }}>
                    <Card sx={{ padding: 4, marginTop: 8 }}>
                        <Typography variant="h5" gutterBottom>
                            Sign Up
                        </Typography>

                        {error && (
                            <Alert
                                severity="error"
                                onClose={() => setError("")}
                                sx={{ mb: 2 }}
                            >
                                {error}
                            </Alert>
                        )}

                        <form onSubmit={onSubmit} noValidate>
                            <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                type="text"
                                value={formValues.username}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={formValues.password}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={isLoading}
                                sx={{ mt: 2 }}
                            >
                                {isLoading ? <CircularProgress size={24} /> : "Submit"}
                            </Button>
                        </form>

                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Already have an account? <Link to="/signin">Sign In</Link>
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default SignUp;