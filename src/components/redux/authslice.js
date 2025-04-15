import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../pages/url';

export const fetchUserProfile = createAsyncThunk(
    'auth/fetchUserProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/api/getauthuser`, {
                withCredentials: true,
            });
            if (response.data?.user) {
                return response.data.user;
            } else {
                return rejectWithValue('User not authenticated');
            }
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Request failed');
        }
    }
);

export const fetchUserTasks = createAsyncThunk(
    'auth/fetchUserTasks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/api/task/getusertask`, {
                withCredentials: true,
            });
            if (response.data) {
                return response.data;
            } else {
                return rejectWithValue(response.data?.message || 'No tasks found'); 
            }
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Request failed');
        }
    }
);


const authslice = createSlice({
    name: 'auth',
    initialState: {
        profile: null,
        loading: false,
        isprofile: false,
        isAuthenticated: false,
        error: null,
        tasks: [],
        taskLoading: false,
        taskError: null,
        taskSuccess: false,
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchUserProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
            state.loading = false;
            state.isprofile = true;
            state.isAuthenticated = true;
        })
        .addCase(fetchUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isprofile = false;
            state.isAuthenticated = false;
        })
        .addCase(fetchUserTasks.pending, (state) => {
            state.taskLoading = true;
            state.taskError = null;
        })
        .addCase(fetchUserTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
            state.taskLoading = false;
            state.taskSuccess = true;
        }) 
        .addCase(fetchUserTasks.rejected, (state, action) => {
            state.taskLoading = false;
            state.taskError = action.payload;
            state.taskSuccess = false;
        }); 
        

        

    },
});

export default authslice.reducer;
