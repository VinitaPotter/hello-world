<template>
  <div class="hello">
    <div class="weather-card">
      <!-- <img :src="`../assets/${weather_icon || 'sun'}.svg`" alt class="weather-card-icon" /> -->
      <img :src="icon" alt class="weather-card-icon" />
      <div class="weather-card-text">
        <div class="heading">{{city}}</div>
        <div class="is_capitalized">{{latest_weather.description}}</div>

        <div class="temprature">
          <p>
            Temprature:
            <span>{{latest_temp.temp }}°C</span>
          </p>
          <p>
            Feels like:
            <span>{{latest_temp.feels_like }}°C</span>
          </p>
        </div>
      </div>
    </div>
    <div class="heading-news">Latest in Tech for you</div>
    <div class="news-card has-slimscroll">
      <div class="news" v-for="news in latest_news" :key="news.id">
        <a class="headline" href="news.url">{{news.title}}</a>
        <p class="author">
          By {{news.author}}
          <span
            class="date"
          >On {{new Date(news.publishedAt).toLocaleDateString()}}</span>
        </p>
        <img class="image" :src="news.urlToImage" alt />
        <p class="source">{{news.source.name}}</p>
        <p class="content">{{news.description ? news.description : news.content}}</p>
      </div>
      <div class="heading">That's all for now</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      latest_news: null,
      latest_weather: null,
      city: null,
      latest_temp: null,
      weather_icon: null
    };
  },
  created() {
    this.getNews();
    this.getWeather();
  },
  computed: {
    icon() {
      if (this.weather_icon) {
        return require(`@/assets/${this.weather_icon}.svg`);
      } else {
        return require("../assets/sun.png");
      }
    }
  },
  methods: {
    getNews() {
      let url = `https://newsapi.org/v2/everything?q=tech&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
      axios.get(url).then(res => (this.latest_news = res.data.articles));
    },
    getWeather() {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=Pune,in&units=metric&APPID=${process.env.VUE_APP_WEATHER_API_KEY}`;
      axios.get(url).then(res => {
        this.city = res.data.name;
        this.latest_weather = res.data.weather[0];
        this.latest_temp = res.data.main;
        this.weather_icon = this.latest_weather.main;
      });
    }
  }
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
.hello {
  font-family: "Kanit", sans-serif;

  margin: auto;
  display: flex;
  flex-direction: column;
  background: #ecf9f9;
  width: 50vw;
  border-radius: 0.5rem;
  padding: 4rem 1rem;
  color: #595959;
  height: max-content;
}
.weather-card {
  position: relative;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  background: rgb(247, 243, 243);
  width: 60%;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 5px 0px #ccc, -5px -5px 6px 0px #fff;
  margin-bottom: 5rem;

  &-icon {
    height: 4rem;
    width: 4rem;
    margin-right: 2rem;
    box-shadow: 1px 1px 6px 0 #494949, -1px -1px 6px 0px #fff;
    border-radius: 100%;
    position: absolute;
    top: -1rem;
    left: -1rem;
  }
  &-text {
    color: #000;
  }
}

.heading {
  font-size: 1.5rem;
  font-weight: 600;
  &-news {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 5rem;
    padding: 0 3rem;
  }
}

.news-card {
  text-align: left;
  padding: 0 3rem;
  height: 50vh;
  overflow: auto;
  .news {
    text-align: left;
    margin-bottom: 2rem;
    .headline {
      font-weight: 800;
      font-size: 1.6rem;
    }
    .author {
      font-style: italic;
    }
    .image {
      width: 100%;
      margin: auto;
    }
  }
}

.has-slimscroll::-webkit-scrollbar {
  width: 6px;
  background-color: #ecf9f9;
}

.has-slimscroll::-webkit-scrollbar-thumb {
  background-color: #ecf9f9;
}

.is_capitalized {
  text-transform: capitalize;
}

.temprature {
  display: flex;
  p {
    margin-right: 1rem;
    span {
      font-weight: 700;
    }
  }
}
</style>