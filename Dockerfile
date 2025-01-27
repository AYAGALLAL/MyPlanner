# Use the official Node.js image as the base image
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Run tests (assuming you're using Jest or any other test suite)
RUN npm run test

# Build the Next.js app for production
RUN npm run build

# Create a production image
FROM node:18-slim

# Set the working directory for the production image
WORKDIR /app

# Copy only the build artifacts and dependencies from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm install --production

# Expose the app port (default is 3000 for Next.js)
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
