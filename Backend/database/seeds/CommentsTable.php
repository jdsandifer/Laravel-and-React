<?php

use Illuminate\Database\Seeder;
use App\Comment;

class CommentsTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        // Create 10 comments
        for ($i = 0; $i < 10; $i++) {
            Comment::create([
                'text' => $faker->realText(144),
                'userName' => $faker->name,
                'userEmail' => $faker->email
            ]);
        }
    }
}
