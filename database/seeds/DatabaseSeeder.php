<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'admin',
            'password' => bcrypt('Admin123@123'),
            'email' => 'admin@gmail.com',
            'level' => 1
        ]);

        DB::table('video')->insert([
            'id' => 1,
            'link' => 'vh.mp4',
            
        ]);
    }
}
