# Use Node.js LTS (Alpine for smaller image size)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose the port from ENV (default to 5001 if not set in compose)
EXPOSE 5001

# Set environment to production
ENV NODE_ENV=production
  
# Start the application
CMD ["npm", "start"]
