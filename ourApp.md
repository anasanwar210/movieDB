# Our Movie App 🎥

## **Description**

This is a custom Angular app designed to browse and discover movies using **TMDb API**. The app is built with Angular and Bootstrap for responsiveness and modern UI design.

---

## **Genres**

All genres:

- https://api.themoviedb.org/3/genre/movie/list?api_key=5b2b2b6dddf920e316281b584f620563&language=en-US

Here are the movie genres supported in the app:

- **Action** (ID: 28)
- **Adventure** (ID: 12)
- **Animation** (ID: 16)
- **Comedy** (ID: 35)
- **Drama** (ID: 18)
- **Horror** (ID: 27)
- **Science Fiction** (Sci-Fi) (ID: 878)

---

## **API Integration**

### **Base URL**

All API requests are made to this base URL:

- https://api.themoviedb.org/3

### **API Key**

- 5b2b2b6dddf920e316281b584f620563

Example for Action movies (ID: 28):

- https://api.themoviedb.org/3/discover/movie?api_key=5b2b2b6dddf920e316281b584f620563&with_genres=28

2. **Get Movie Details**  
   Fetch detailed information about a specific movie using its `movie_id`:

- GET /movie/{movie_id}?api_key=5b2b2b6dddf920e316281b584f620563

Example:

- https://api.themoviedb.org/3/movie/550?api_key=5b2b2b6dddf920e316281b584f620563

3. **Search Movies**  
   Search for movies by title:

- GET /search/movie?api_key=5b2b2b6dddf920e316281b584f620563&query={search_query}

Example:

- https://api.themoviedb.org/3/search/movie?api_key=5b2b2b6dddf920e316281b584f620563&query=Inception

4. **Trending Movies**  
   Fetch movies trending on TMDb:

- GET /trending/movie/{time_window}?api_key=5b2b2b6dddf920e316281b584f620563
  Replace `{time_window}` with `day` or `week`.

Example for daily trending movies:

- https://api.themoviedb.org/3/trending/movie/day?api_key=5b2b2b6dddf920e316281b584f620563

5. **Upcoming Movies**  
   Fetch upcoming movies:

- GET /movie/upcoming?api_key=5b2b2b6dddf920e316281b584f620563

Example:

- https://api.themoviedb.org/3/movie/upcoming?api_key=5b2b2b6dddf920e316281b584f620563
